package com.competa.tuindr.controller

import com.competa.tuindr.repository.UserRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid


@RestController
@RequestMapping("/api")
class LoginController(private val userRepository: UserRepository) {
    @PostMapping("/login")
    fun login(@Valid @RequestBody loginUser: LoginUser): ResponseEntity<Any> {
        val user = userRepository.findByEmailAndPassword(loginUser.email, loginUser.password)
                ?: return ResponseEntity("{" +
                        "\"Status\": \"404\"," +
                        "\"Message\": \"User could not be found with those credentials\"" +
                        "}", HttpStatus.NOT_FOUND)

        return ResponseEntity.ok(user)
    }
}

class LoginUser {
    val email: String = ""
    val password: String = ""
}
