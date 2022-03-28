package com.examly.springapp.service;



import com.examly.springapp.model.CartModel;

import java.util.List;

public interface CartService {
    CartModel addToCart(int quantity, Long id);
    
    List<CartModel> showCart(Long id);

	String deleteCartItem(Long id);
}


