package com.examly.springapp.controller;

import com.examly.springapp.model.CartModel;
import com.examly.springapp.request.CartRequest;
import com.examly.springapp.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/home/{id}")
   @CrossOrigin(origins = "http://localhost:4200/")
    public CartModel addToCart(@RequestBody CartRequest cartRequest, @PathVariable Long id) {
        return cartService.addToCart(cartRequest.getQuantity(),cartRequest.getUsername(), id);
    }

    @GetMapping("/cart/{id}")
   @CrossOrigin(origins = "http://localhost:4200/")
    public List<CartModel> showCart(@PathVariable("id") String id) {
        return cartService.showCart(id);
    }

    @DeleteMapping("/cart/{id}")
   @CrossOrigin(origins = "http://localhost:4200/")
    public String cartItemDelete(@RequestBody String username, @PathVariable("id") Long id) {
        // Todo: change to del specific user's cart item only not all the cart items which have id
        return cartService.deleteCartItem(id,username);
    
    }
}
