$(function () {
	$('#edit-slide').click(function(event) {
		var el = $(this)
		var state = el.data('state')
		var newState;
		document.editor;
		if (state == 'create') {
			newState="close"
			document.editor = new MediumEditor('.editable');
		}else{
			newState="create"
			document.editor.destroy();
		}
		el.data('state', newState)
		$(el.children()[0]).text(newState)
	});
})