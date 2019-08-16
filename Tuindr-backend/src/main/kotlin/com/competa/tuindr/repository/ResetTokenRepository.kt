package com.competa.tuindr.repository

import com.competa.tuindr.model.ResetToken
import com.competa.tuindr.model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ResetTokenRepository: JpaRepository<ResetToken, Long> {
    fun findByToken(token: String): ResetToken?

    fun findByUser(user: User): ResetToken?
}
