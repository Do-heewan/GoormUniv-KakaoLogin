package me.noh.kakao_login.repository;

import me.noh.kakao_login.service.UsersInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UsersInfo, Long> {
    Optional<UsersInfo> findByEmail(String email);
}
