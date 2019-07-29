package com.competa.tuindr.service

import com.competa.tuindr.repository.UserRepository
import java.util.ArrayList

import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.beans.factory.annotation.Autowired



@Service
class JwtUserDetailsService : UserDetailsService {

    @Autowired
    private val userRepository: UserRepository? = null

    @Autowired
    private val bcryptEncoder: PasswordEncoder? = null

    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(username: String): UserDetails {

        val user = userRepository!!.findByUsername(username)
                ?: throw UsernameNotFoundException("User not found with username: $username")
        return User(user.email, user.password,
                ArrayList())
    }
}
