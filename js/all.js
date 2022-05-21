// 如果驗證不通過，禁止提交表單
(function () {
	'use strict';
	window.addEventListener('load', function () {
		// 取得表單驗證樣式
		var forms = document.getElementsByClassName('needs-validation');
		// 重複驗證，並且禁止提交
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();




