package me.noh.kakao_login.controller;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.noh.kakao_login.service.KakaoLoginService;
import me.noh.kakao_login.service.KakaoUserInfoResponseDto;
import org.apache.catalina.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("")
public class KakaoLoginController {

    final KakaoLoginService kakaoLoginService;

    @GetMapping("/redirect")
    public ResponseEntity<Map<String, Object>> redirect(@RequestParam("code") String code) {
        String token = kakaoLoginService.getAccessTokenFromKakao(code); // code로 token 발급

        KakaoUserInfoResponseDto userInfo = kakaoLoginService.getUserInfo(token); // token으로 user Info 불러오기

        Long userId = userInfo.getId();
        String username = userInfo.getKakaoAccount().getProfile().getNickName();
        String userEmail = userInfo.getKakaoAccount().getEmail();

        Map<String, Object> response = new HashMap<>(); // id, email, name, token 반환
        response.put("accessToken", token);
        response.put("userId", userId);
        response.put("userName", username);
        response.put("userEmail", userEmail);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String authorizationHeader) {

        String accessToken = authorizationHeader.substring("Bearer ".length()).trim();
        String logoutResponse = kakaoLoginService.logout(accessToken);

        return ResponseEntity.ok(logoutResponse);
    }
}
