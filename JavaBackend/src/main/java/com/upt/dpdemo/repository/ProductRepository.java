package com.upt.dpdemo.repository;

import java.util.List;

import com.upt.dpdemo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByName(String name);
    List<Product> findByNameStartsWithIgnoreCase(String name);

    @Query("SELECT p FROM Product p WHERE p.description LIKE %:description%")
    List<Product> searchByDescriptionLike(@Param("description") String description);
}
