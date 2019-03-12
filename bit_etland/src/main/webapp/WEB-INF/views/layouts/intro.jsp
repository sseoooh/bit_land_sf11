<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html>
<html>
<jsp:include page="common.jsp"></jsp:include>
<body>
	<div id="wrapper" class="grid-full-container container-fluid">
		<div class ="grid-item">
          <tiles:insertAttribute name="top" />
		</div>
        <div class ="grid-item">
          <tiles:insertAttribute name="nav" />
        </div>
        <div class ="grid-item">
          <tiles:insertAttribute name="content" />
        </div>
        <div class ="grid-item">
          <tiles:insertAttribute name="bottom" />
       </div>
 </div>

</body>
</html>