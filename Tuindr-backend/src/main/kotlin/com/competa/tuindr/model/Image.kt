package com.competa.tuindr.model

import javax.persistence.*
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull

@Entity(name = "images")
data class Image (
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long = 0,

        @get: NotBlank
        val name: String = "",

        @get: NotBlank
        val extension: String = "",

        @get: NotNull
        val profile_image: Boolean = false,

        @ManyToOne
        @JoinColumn(name="user_id")
        val user_id: User
)
