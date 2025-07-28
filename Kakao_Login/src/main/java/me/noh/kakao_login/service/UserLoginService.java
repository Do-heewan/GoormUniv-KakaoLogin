package me.noh.kakao_login.service;

import lombok.RequiredArgsConstructor;
import me.noh.kakao_login.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import me.noh.kakao_login.service.UsersInfo;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserLoginService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public Long save(AddUserRequest dto) {
        return userRepository.save(UsersInfo.builder()
                .email(dto.getEmail())
                .password(bCryptPasswordEncoder.encode(dto.getPassword()))
                .build()).getId();
    }
}
