package com.examly.springapp.repository;

import com.examly.springapp.model.CartModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<CartModel, Long> {

    
    public List<CartModel> findByUserId(String id);

    @Query("delete from CartModel c where c.cartItemID:=cartItemId and c.userId:=username")
    public void deleteCartItemByUserId(Long cartItemId, String username);
}
