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
import com.competa.tuindr.model.JwtRequest
import com.competa.tuindr.model.JwtResponse
import org.springframework.web.bind.annotation.*
import org.springframework.security.crypto.factory.PasswordEncoderFactories



@RestController
@RequestMapping("/api")
class LoginController {

    @Autowired
    private val authenticationManager: AuthenticationManager? = null

    @Autowired
    private val jwtTokenUtil: JwtTokenUtil? = null

    @Autowired
    private val userDetailsService: JwtUserDetailsService? = null

    @PostMapping("/authenticate")
    @Throws(Exception::class)
    fun createAuthenticationToken(@RequestBody authenticationRequest: JwtRequest): ResponseEntity<*> {
        val passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder()
        println(passwordEncoder.encode(authenticationRequest.password))
        authenticate(authenticationRequest.username, passwordEncoder.encode(authenticationRequest.password))

        val userDetails = userDetailsService!!
                .loadUserByUsername(authenticationRequest.username)

        val token = jwtTokenUtil!!.generateToken(userDetails)

        return ResponseEntity.ok<Any>(JwtResponse(token))
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
