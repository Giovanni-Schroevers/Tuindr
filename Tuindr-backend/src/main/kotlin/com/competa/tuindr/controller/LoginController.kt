package com.competa.tuindr.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.security.authentication.DisabledException
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.userdetails.UserDetails
import com.competa.tuindr.service.JwtUserDetailsService
import com.competa.tuindr.config.JwtTokenUtil
import com.competa.tuindr.model.*
import com.competa.tuindr.repository.LoginTokenRepository
import com.competa.tuindr.repository.ResetTokenRepository
import com.competa.tuindr.repository.UserRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import javax.validation.Valid
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.SimpleMailMessage
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import javax.mail.SendFailedException
import kotlin.streams.asSequence

@RestController
@CrossOrigin
@RequestMapping("/api")
class LoginController(
        private val userRepository: UserRepository,
        private val resetTokenRepository: ResetTokenRepository
) {

    @Autowired
    private val authenticationManager: AuthenticationManager? = null

    @Autowired
    private val jwtTokenUtil: JwtTokenUtil? = null

    @Autowired
    private val userDetailsService: JwtUserDetailsService? = null

    @Autowired
    var emailSender: JavaMailSender? = null

    @RequestMapping(value = ["/login"], method = [RequestMethod.POST])
    @Throws(Exception::class)
    fun createAuthenticationToken(@RequestBody authenticationRequest: JwtRequest): ResponseEntity<Any> {

        authenticate(authenticationRequest.username, authenticationRequest.password)

        val userDetails = userDetailsService!!
                .loadUserByUsername(authenticationRequest.username)

        val token = jwtTokenUtil!!.generateToken(userDetails)

        return ResponseEntity.ok(JwtResponse(token))
    }

    @PostMapping("/reset-password")
    fun sendResetPasswordMail(@Valid @RequestBody email: ResetPasswordEmail): ResponseEntity<Any> {
        val user = userRepository.findByUsername(email.username)
                ?: return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"message\": \"No user with that email\"}")

        try {
            var resetToken = resetTokenRepository.findByUser(user)

            if (resetToken == null) {
                val source = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
                val token = java.util.Random().ints(16, 0, source.length)
                        .asSequence()
                        .map(source::get)
                        .joinToString("")

                resetToken = ResetToken(token = token, user = user)
            }

            resetTokenRepository.save(resetToken)

            val message = SimpleMailMessage()
            message.setTo(email.username)
            message.setSubject("Reset password")
            message.setText("http://localhost:3000/reset-password/${resetToken.token}")
            emailSender!!.send(message)
        } catch (e : SendFailedException) {
            throw Exception("EMAIL_FAILED", e)
        }

        return ResponseEntity.noContent().build()
    }

    @PostMapping("/reset-password/{token}")
    fun resetPassword(@PathVariable(value = "token") token: String,
                      @Valid @RequestBody loginUser: JwtRequest): ResponseEntity<Any>{
        val user = userRepository.findByUsername(loginUser.username)
                ?: return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"message\": \"No user with that email\"}")

        val resetToken = resetTokenRepository.findByToken(token) ?: return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"message\": \"Token is not valid token\"}")

        if (resetToken.user.id != user.id)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"message\": \"This token does not belong to this user\"}")

        user.password = BCryptPasswordEncoder().encode(loginUser.password)

        resetTokenRepository.delete(resetToken)

        return ResponseEntity.noContent().build()
    }

    @Throws(Exception::class)
    private fun authenticate(username: String, password: String) {
        try {
            authenticationManager!!.authenticate(UsernamePasswordAuthenticationToken(username, password))
        } catch (e: DisabledException) {
            throw Exception("USER_DISABLED", e)
        } catch (e: BadCredentialsException) {
            throw Exception("INVALID_CREDENTIALS", e)
        }
    }
}
