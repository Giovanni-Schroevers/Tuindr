package com.competa.tuindr.service

import java.util.ArrayList

import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

import com.competa.tuindr.model.User
import com.competa.tuindr.repository.UserRepository

@Service
class JwtUserDetailsService(private val userRepository: UserRepository) : UserDetailsService {
    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(username: String): UserDetails {

        val user: User = userRepository.findByEmail(username)
                ?: throw UsernameNotFoundException("User not found with username: $username")
        return org.springframework.security.core.userdetails.User(user.email, user.password,
                ArrayList())
    }

}
