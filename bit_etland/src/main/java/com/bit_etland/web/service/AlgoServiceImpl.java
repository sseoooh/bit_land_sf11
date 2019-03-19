package com.bit_etland.web.service;

import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class AlgoServiceImpl implements AlgoService{
	

	@Override
	public String arithmeticSequence(Map<?, ?> param) {
		System.out.println("---------야 알고서비스 들어왔냐-----------?");
		String start = (String) param.get("start"),
				end = (String) param.get("end"),
				diff = (String) param.get("diff"),
				result = "";
		int A=Integer.parseInt(start); //첫번째
		int E=Integer.parseInt(end); // 마지막번째
		int D=Integer.parseInt(diff); // 공차
		int S=A;//항의 순서
		int N=2;
		int AN=0;
		while(true) {
			AN = A+(N-1) * D;
			S=S+AN;
			N=N+1;
			if(N > E) break;
		}

		
		result = String.valueOf(S);
		System.out.println("----------S의값"+S);
		return result;
	}
	
}
