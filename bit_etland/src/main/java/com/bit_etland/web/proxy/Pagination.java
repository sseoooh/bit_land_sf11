package com.bit_etland.web.proxy;

import javax.servlet.http.HttpServletRequest;


public class Pagination implements Proxy{
	private int pageNum, pageSize, blockSize, blockNum,
			startRow, endRow, startPage, endPage,
			prevBlock, nextBlock, totalcount;
	private boolean existPrev, existNext;

	
	public int getPageNum() {
		return pageNum;
	}


	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}


	public int getPageSize() {
		return pageSize;
	}


	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}


	public int getBlockSize() {
		return blockSize;
	}


	public void setBlockSize(int blockSize) {
		this.blockSize = blockSize;
	}


	public int getBlockNum() {
		return blockNum;
	}


	public void setBlockNum(int blockNum) {
		this.blockNum = blockNum;
	}


	public int getStartRow() {
		return startRow;
	}


	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}


	public int getEndRow() {
		return endRow;
	}


	public void setEndRow(int endRow) {
		this.endRow = endRow;
	}


	public int getStartPage() {
		return startPage;
	}


	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}


	public int getEndPage() {
		return endPage;
	}


	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}


	public int getPrevBlock() {
		return prevBlock;
	}


	public void setPrevBlock(int prevBlock) {
		this.prevBlock = prevBlock;
	}


	public int getNextBlock() {
		return nextBlock;
	}


	public void setNextBlock(int nextBlock) {
		this.nextBlock = nextBlock;
	}


	public int getTotalcount() {
		return totalcount;
	}


	public void setTotalcount(int totalcount) {
		this.totalcount = totalcount;
	}


	public boolean isExistPrev() {
		return existPrev;
	}


	public void setExistPrev(boolean existPrev) {
		this.existPrev = existPrev;
	}


	public boolean isExistNext() {
		return existNext;
	}


	public void setExistNext(boolean existNext) {
		this.existNext = existNext;
	}


	@Override
	public void carryOut(Object o) {
		HttpServletRequest request = (HttpServletRequest)o;
		System.out.println("프록시 페이지네이션 도착");
		pageNum = (request.getParameter("page_num")==null)? 1: Integer.parseInt(request.getParameter("page_num"));
		pageSize = (request.getParameter("page_size")==null)? 5: Integer.parseInt(request.getParameter("page_size"));
		System.out.println("pageSize:::"+this.pageSize);
		
		
		/*
		 * totalcount = CustomerServiceImpl.getInstance().countCustomer(null);
		 * System.out.println("totalcount:::"+this.totalcount);
		 */
		//this.startRow = String.valueOf(totalcount-Integer.parseInt(this.pageSize));
		//this.endRow = String.valueOf(Integer.parseInt(this.startRow) +Integer.parseInt(this.pageSize)) ;  
		System.out.println("pageNUM??"+pageNum);
		System.out.println("pageSize??"+pageSize);
	
		/*
		 * startRow = (totalcount-((pageSize*pageNum)-1)); 
		 * endRow = ((totalcount-((pageSize*pageNum)-1))+4);
		 */
		blockSize = (request.getParameter("blockSize")==null)?5:Integer.parseInt(request.getParameter("blockSize")); 
		System.out.println("count의 나누기는?"+blockSize);
		
		System.out.println("count의 나머지는?"+blockSize);
		
		/*
		 * int ex = blockSize*pageSize; startRow = totalcount-(pageSize*pageNum)+1;
		 * endRow = startRow + pageSize-1; if(endRow<=0) { endRow = 0; }
		 * 
		 * System.out.println("1. end:: "+ex);
		 * System.out.println("=== startrow:: "+startRow);
		 * 
		 * System.out.println("=== row:: "+endRow);
		 * 
		 * System.out.println("startRow:::"+startRow);
		 * System.out.println("endrow:::"+endRow);
		 */
		
		
		 
		int pageCount = totalcount/pageSize;
		if(totalcount%pageSize!=0) {
			pageCount++; 
		}
		System.out.println("전체 페이지수: "+pageCount); 
		startRow = (pageNum -1) *pageSize + 1; 
		System.out.println("스타트로우: "+startRow); 
		endRow = (totalcount > pageNum * pageSize)? pageNum * pageSize: pageCount;
		System.out.println("엔드로우: "+endRow);
		 
		System.out.println("blockSize::"+blockSize);
	//	blockSize
	
		existPrev = (pageNum<=blockSize)?false:true;
		blockNum = (pageNum-1)/blockSize;
		
		
			startPage = blockNum*blockSize+1;
		
		
		
		endPage = startPage+4;
		if(endPage>=pageCount) {
			endPage=pageCount;
		}
		existNext = (startPage+pageSize)>=pageCount?true:false;
		/*
		 * startPage = endPage-pageSize+1; endPage = totalcount/pageSize-1;
		 */
		System.out.println("==startPage::"+startPage);
		System.out.println("==endPage::"+endPage);

		prevBlock = startPage - pageSize; 
		nextBlock = startPage + pageSize;
		System.out.println("==prevBlock::"+prevBlock);
		System.out.println("==nextBlock::"+nextBlock);
		
		
	
		
		
	}
	
}
