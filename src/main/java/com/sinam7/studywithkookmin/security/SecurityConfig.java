package com.sinam7.studywithkookmin.security;

import com.sinam7.studywithkookmin.entity.MyRole;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig {

    private final CustomOAuth2UserService customOAuth2UserService;

    @Bean
    protected SecurityFilterChain configure(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable());
        http.headers(header -> header.frameOptions(frame -> frame.disable()));
        http.authorizeHttpRequests(registry -> registry.requestMatchers("/", "/css/**", "/images/**", "/js**", "/h2-console/**", "/profile").permitAll());
        http.authorizeHttpRequests(registry -> registry.requestMatchers("/api/v1/**").hasRole(MyRole.USER.name()));
        http.authorizeHttpRequests(registry -> registry.anyRequest().authenticated());
        http.logout(configurer -> configurer.logoutSuccessUrl("/"));
        http.oauth2Login(oauthConfigurer -> oauthConfigurer.userInfoEndpoint(endpoint -> endpoint.userService(customOAuth2UserService)));
        http.oauth2Login(oauthConfigurer -> oauthConfigurer.defaultSuccessUrl("/", true));
        return http.build();

    }
}
