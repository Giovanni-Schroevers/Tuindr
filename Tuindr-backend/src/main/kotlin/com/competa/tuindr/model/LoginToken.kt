package com.competa.tuindr.model

import java.time.LocalDateTime
import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity(name = "login_tokes")
data class LoginToken (
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long = 0,

        @get: NotBlank
        val token: String = "",

        val expiration_date: LocalDateTime = LocalDateTime.now().plusDays(1),

        @ManyToOne
        @JoinColumn(name="user_id")
        val user: User
)
