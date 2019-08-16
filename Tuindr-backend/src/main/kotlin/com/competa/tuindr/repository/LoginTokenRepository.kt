package com.competa.tuindr.repository

import com.competa.tuindr.model.LoginToken
import com.competa.tuindr.model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface LoginTokenRepository: JpaRepository<LoginToken, Long>
