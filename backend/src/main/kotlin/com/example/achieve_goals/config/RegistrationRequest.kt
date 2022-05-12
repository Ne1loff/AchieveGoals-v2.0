package com.example.achieve_goals.config

data class RegistrationRequest(
    val username: String,
    val male: Boolean,
    val email: String,
    val locality: Long,
    val password: String
)