package com.bit_etland.web.proxy;

import com.bit_etland.web.domain.ImageDTO;

public class ImageProxy implements Proxy{
	ImageDTO img ;
	
	public ImageDTO getImg() {
		return img;
	}

	public void setImg(ImageDTO img) {
		this.img = img;
	}

	@Override
	public void carryOut(Object o) {
		// TODO Auto-generated method stub
		
	}

	/*@Override
	public void carryOut(Object o) {
		System.out.println("이미지 프록시 === [1]");
		HttpServletRequest request =  (HttpServletRequest) o;
		if(!ServletFileUpload.isMultipartContent(request)) {
			System.out.println("멀티파트 리퀘스트가 아닙니다.");
			return;
		}
		FileItemFactory factory = new DiskFileItemFactory();
		ServletFileUpload upload = new ServletFileUpload(factory);
		upload.setFileSizeMax(1024 * 1024 * 40); // 40MB
		upload.setSizeMax(1024 * 1024 * 50); // 50MB
		List<FileItem> items = null;

		try {
			File file = null;
			items = upload.parseRequest(new ServletRequestContext(request));
			Iterator<FileItem> it = items.iterator();
			while(it.hasNext()) {
				FileItem item = it.next();
				if(!item.isFormField()) {
					String fileName = item.getName();
					System.out.println("파일저장장소 :: "+Props.IMAGE.getValue());
					file = new File(Props.IMAGE.getValue()+fileName);
					item.write(file);
					img = new ImageDTO();
					System.out.println("파일명 :: "+fileName.substring(0, fileName.indexOf(".")));
					img.setImgName(fileName.substring(0, fileName.indexOf(".")));
					System.out.println("확장자 :: "+fileName.substring(fileName.indexOf(".")+1));
					img.setImgExtention(fileName.substring(fileName.indexOf(".")+1));
					System.out.println("오너명 :: "+request.getParameter("customer_id"));
					img.setOwner(request.getParameter("customer_id"));
					System.out.println("최종 조합 명 ::"+Props.IMAGE.getValue()+
							fileName.substring(0, fileName.indexOf("."))+fileName.substring(fileName.indexOf(".")));
					// DB에 입력하기 
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}*/
}
