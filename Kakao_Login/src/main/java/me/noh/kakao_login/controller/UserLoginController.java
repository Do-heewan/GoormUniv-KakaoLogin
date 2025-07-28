package me.noh.kakao_login.controller;

import lombok.RequiredArgsConstructor;
import me.noh.kakao_login.service.AddUserRequest;
import me.noh.kakao_login.service.UserLoginService;
import me.noh.kakao_login.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user/api")
public class UserLoginController {
    private final UserLoginService userLoginService;
    private final UserService userService;

    @PostMapping("/signup")
    public String signup(AddUserRequest request) {
        userLoginService.save(request);

        return "redirect:/login";
    }


}
