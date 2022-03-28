package com.examly.springapp.controller;

import com.examly.springapp.model.CartModel;
import com.examly.springapp.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/home/{id}")
    @CrossOrigin(origins = "https://8081-feefcaccbcebccbcdaccaffbdddbad.examlyiopb.examly.io/")
    public CartModel addToCart(@RequestBody int quantity, @PathVariable Long id) {
        return cartService.addToCart(quantity, id);
    }

    @GetMapping("/cart/{id}")
    @CrossOrigin(origins = "https://8081-feefcaccbcebccbcdaccaffbdddbad.examlyiopb.examly.io/")
    public List<CartModel> showCart(@PathVariable("id") Long id) {
        return cartService.showCart(id);
    }

    @DeleteMapping("/cart/{id}")
    @CrossOrigin(origins = "https://8081-feefcaccbcebccbcdaccaffbdddbad.examlyiopb.examly.io/")
    public String cartItemDelete(@PathVariable("id") Long id) {
        // Todo: change to del specific user's cart item only not all the cart items which have id
        return cartService.deleteCartItem(id);
    
    }
}
