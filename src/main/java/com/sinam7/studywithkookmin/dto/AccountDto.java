package com.sinam7.studywithkookmin.dto;

import com.sinam7.studywithkookmin.user.Account;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AccountDto {

    private String firstName;

    private String lastName;

    private String email;

    public static AccountDto convertToDto(Account account) {
        return AccountDto.builder()
                .firstName(account.getFirstName())
                .lastName(account.getLastName())
                .email(account.getEmail())
                .build();
    }
}
