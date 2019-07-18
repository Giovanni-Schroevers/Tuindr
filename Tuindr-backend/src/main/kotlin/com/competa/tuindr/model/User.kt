package com.competa.tuindr.model

import org.springframework.lang.Nullable
import java.util.*
import java.time.LocalDateTime
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.validation.constraints.NotBlank

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

        @get: NotBlank
        val password: String = "",

        @get: NotBlank
        val phone: String = "",

        @get: NotBlank
        val dob: Date = Date(),

        @get: Nullable
        val description: String,

        private val created_at: LocalDateTime = LocalDateTime.now(),

        @get: Nullable
        val updated_at: LocalDateTime = LocalDateTime.now(),

        @get: Nullable
        val deleted_at: LocalDateTime
)