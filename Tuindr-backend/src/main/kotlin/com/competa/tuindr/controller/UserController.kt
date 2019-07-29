package com.competa.tuindr.controller

import com.competa.tuindr.model.User
import com.competa.tuindr.repository.UserRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder

@RestController
@RequestMapping("/api")
class UserController(private val userRepository: UserRepository) {

    @GetMapping("/users")
    fun getAllUsers(): List<User> = userRepository.findAll()

    @PostMapping("/register")
    fun createNewUser(@Valid @RequestBody user: User): User {

        user.password = BCryptPasswordEncoder().encode(user.password)

        return userRepository.save(user)
    }

    @GetMapping("/users/{id}")
    fun getUserById(@PathVariable(value = "id") userId: Long): ResponseEntity<User> {
        return userRepository.findById(userId).map { user ->
            ResponseEntity.ok(user)
        }.orElse(ResponseEntity.notFound().build())
    }

    @PutMapping("/users/{id}")
    fun updateUserById(@PathVariable(value = "id") userId: Long,
                       @Valid @RequestBody newUser: User) : ResponseEntity<User> {

        return userRepository.findById(userId).map {
            existingUser -> val updateUser: User = existingUser
                .copy(email = newUser.email, password = newUser.password)
            ResponseEntity.ok().body(userRepository.save(updateUser))
        }.orElse(ResponseEntity.notFound().build())
    }

    @DeleteMapping("users/{id}")
    fun deleteUserById(@PathVariable(value = "id") userId: Long): ResponseEntity<Void> {
        return userRepository.findById(userId).map {
            user -> userRepository.delete(user)
            ResponseEntity<Void>(HttpStatus.OK)
        }.orElse(ResponseEntity.notFound().build())
    }
}
