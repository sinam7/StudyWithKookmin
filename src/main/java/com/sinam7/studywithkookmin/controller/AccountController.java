package com.sinam7.studywithkookmin.controller;

import com.sinam7.studywithkookmin.service.AccountService;
import com.sinam7.studywithkookmin.user.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

import static com.sinam7.studywithkookmin.dto.AccountDto.convertToDto;

@RestController
@RequestMapping("/v1/oauth")
public class AccountController {

    @Autowired
    AccountService accountService;

    @GetMapping("/user/info")
    public ResponseEntity getUserInfo(Principal principal) {
        Account account = accountService.getAccount(Long.valueOf(principal.getName()));
        return ResponseEntity.ok().body(convertToDto(account));
    }
}
