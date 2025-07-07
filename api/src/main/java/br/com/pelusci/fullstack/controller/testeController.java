package br.com.pelusci.fullstack.controller;

import br.com.pelusci.fullstack.core.model.teste;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class testeController {
    @GetMapping
    public String index() {
        new teste();
        return "index";
    }
}
