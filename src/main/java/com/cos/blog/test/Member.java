package com.cos.blog.test;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor 
public class Member {

	// private 쓰는 이유 : 변수에 다이렉트로 접근하면 안되기 때문!
	// 변수의 상태는 메서드에 의해 변경되도록 만들기!
	
	private int id;
	private String username;
	private String password;
	private String email;
	
}
