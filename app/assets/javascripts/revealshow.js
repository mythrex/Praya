$(function () {
	var editor;
	$('#edit-slide').click(function(event) {
		var el = $(this)
		var state = el.data('state')
		var newState;
		if (state == 'create') {
			newState="close"
			editorr = new MediumEditor('.editable');
		}else{
			newState="create"
			editor.destroy();
		}
		el.data('state', newState)
		$(el.children()[0]).text(newState)
	});
})