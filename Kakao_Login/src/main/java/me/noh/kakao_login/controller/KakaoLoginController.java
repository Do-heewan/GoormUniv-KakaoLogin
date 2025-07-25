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
    public ResponseEntity<KakaoUserInfoResponseDto> redirect(@RequestParam("code") String code) {
        // System.out.println(code);
        String token = kakaoLoginService.getAccessTokenFromKakao(code); // code로 token 발급

        KakaoUserInfoResponseDto userInfo = kakaoLoginService.getUserInfo(token); // token으로 user Info 불러오기

        Long userId = userInfo.getId();
        String username = userInfo.getKakaoAccount().getProfile().getNickName();
        String userEmail = userInfo.getKakaoAccount().getEmail();

        System.out.println(userInfo);
        System.out.println(userId + username + userEmail);

        return ResponseEntity.ok(userInfo);
    }

    @PostMapping("/logout")
    public ResponseEntity<Map<String, Object>> logout(@RequestHeader("Authorization") String authorizationHeader) {

        String accessToken = authorizationHeader.substring("Bearer ".length()).trim();
        String logoutResponse = kakaoLoginService.logout(accessToken);

        Map<String, Object> response = new HashMap<>();
        response.put("kakaoResponse", logoutResponse); // 로그아웃 응답 (id)
        response.put("accessToken", accessToken); // accessToken 추가

        return ResponseEntity.ok(response);
    }
}
