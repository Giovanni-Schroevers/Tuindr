package com.competa.tuindr.model

import javax.persistence.*
import javax.validation.constraints.NotNull

@Entity(name = "matches")
data class Match (
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long = 0,

        @ManyToOne
        @JoinColumn(name="user_1_id")
        val user_1: User,

        @ManyToOne
        @JoinColumn(name="user_2_id")
        val user_2: User
)
