package com.competa.tuindr.service

import java.util.ArrayList

import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

import com.competa.tuindr.model.User
import com.competa.tuindr.repository.UserRepository
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.beans.factory.annotation.Autowired



@Service
class JwtUserDetailsService : UserDetailsService {
    @Autowired
    private val userRepository: UserRepository? = null



    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(username: String): UserDetails {

        val user: User = userRepository!!.findByEmail(username)
                ?: throw UsernameNotFoundException("User not found with username: $username")
        return org.springframework.security.core.userdetails.User(user.email, user.password,
                ArrayList())
    }

}
