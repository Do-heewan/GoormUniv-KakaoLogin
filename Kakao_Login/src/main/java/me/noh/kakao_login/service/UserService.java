package me.noh.kakao_login.service;

import lombok.RequiredArgsConstructor;
import me.noh.kakao_login.repository.UserRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;

    public UsersInfo loadUserByUsername(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException(email));
    }
}
