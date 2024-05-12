package com.sinam7.studywithkookmin.controller;

import com.sinam7.studywithkookmin.service.AccountService;
import com.sinam7.studywithkookmin.user.Account;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

import static com.sinam7.studywithkookmin.dto.AccountDto.convertToDto;

@RestController
@RequestMapping("/v1/oauth")
@Slf4j
public class AccountController {

    @Autowired
    AccountService accountService;

    @GetMapping("/user/info")
    public ResponseEntity getUserInfo(Principal principal) {
        Account account = accountService.getAccount(Long.valueOf(principal.getName()));
        log.info(convertToDto(account).toString());
        log.info(ResponseEntity.ok().body(convertToDto(account)).toString());
        return ResponseEntity.ok().body(convertToDto(account));
    }
}
