package me.noh.kakao_login.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("")
@CrossOrigin(origins = "https://groom-kakao-login.netlify.app")
public class KakaoLoginController {

    @GetMapping("/redirect")
    public ResponseEntity<String> redirect(@RequestParam("code") String code) {
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
