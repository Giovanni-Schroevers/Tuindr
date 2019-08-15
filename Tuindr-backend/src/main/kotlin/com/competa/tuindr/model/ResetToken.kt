package com.competa.tuindr.model

import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity(name = "reset_tokes")
data class ResetToken (
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long = 0,

        @get: NotBlank
        val token: String = "",

        @ManyToOne
        @JoinColumn(name="user_id")
        val user: User
)
