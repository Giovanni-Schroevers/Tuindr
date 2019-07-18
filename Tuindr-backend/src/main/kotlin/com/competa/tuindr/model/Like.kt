package com.competa.tuindr.model

import javax.persistence.*
import javax.validation.constraints.NotNull

@Entity(name = "likes")
data class Like (
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long = 0,

        @get: NotNull
        val liked: Boolean,

        @ManyToOne
        @JoinColumn(name="user_id", insertable = false, updatable = false)
        val user_id: User,

        @ManyToOne
        @JoinColumn(name="user_id")
        val user_match_id: User
)