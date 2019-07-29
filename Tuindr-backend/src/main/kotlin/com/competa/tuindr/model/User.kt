package com.competa.tuindr.model

import org.springframework.lang.Nullable
import java.util.*
import java.time.LocalDateTime
import javax.persistence.*
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull

@Entity(name = "users")
data class User (
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long = 0,

        @get: NotBlank
        val first_name: String = "",

        @get: NotBlank
        val last_name: String = "",

        @get: NotBlank
        val email: String = "",

        @Column
        private val username: String = email,

        @get: NotBlank
        var password: String = "",

        @get: NotBlank
        val phone: String = "",

        @get: NotNull
        val dob: Date = Date(),

        @get: Nullable
        val description: String = "",

        private val created_at: LocalDateTime = LocalDateTime.now(),

        @get: Nullable
        val updated_at: LocalDateTime = LocalDateTime.now(),

        @get: Nullable
        val deleted_at: LocalDateTime? = null
)
