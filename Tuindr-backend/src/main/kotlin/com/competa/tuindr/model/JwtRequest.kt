package com.competa.tuindr.model

import java.io.Serializable

class JwtRequest(var username: String, var password: String) : Serializable {

    companion object {
        private const val serialVersionUID = 5926468583005150707L
    }
}
