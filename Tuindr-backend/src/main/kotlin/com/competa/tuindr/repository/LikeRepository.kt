package com.competa.tuindr.repository

import com.competa.tuindr.model.Like
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface LikeRepository: JpaRepository<Like, Long>