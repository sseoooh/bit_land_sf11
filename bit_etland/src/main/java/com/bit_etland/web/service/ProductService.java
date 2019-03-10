package com.bit_etland.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.bit_etland.web.domain.ProductDTO;
import com.bit_etland.web.proxy.Proxy;
@Component
public interface ProductService {
	public void registCustomer(ProductDTO pro);
	public List<ProductDTO> bringProductList(Proxy pxy);
	public List<ProductDTO> retrieveProducts(Proxy pxy);
	public ProductDTO retrieveProduct(ProductDTO pro);
	public int countProductr(Proxy pxy);
	public boolean existsProductID(ProductDTO pro);
	public void modifyProduct(ProductDTO pro);
	public void removeProduct(ProductDTO pro);
	public Map<String, Object> fileUpload(Proxy pxy);

	
}
