package com.competa.tuindr.model

import javax.persistence.*
import javax.validation.constraints.NotNull

@Entity(name = "matches")
data class Match (
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long = 0,

        @ManyToOne
        @JoinColumn(name="user_id", updatable = false, insertable = false)
        val user_1_id: User,

        @ManyToOne
        @JoinColumn(name="user_id")
        val user_2_id: User
)
