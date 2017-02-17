$.ajax({
                url: '/test',
                type: 'POST',
                cache: false,
                data: {
                searchWord: "tricount"
                },
                success: function (data) {
                    console.log('ok');
                    $("#test").append("Salut Julien j'espère que tu vas me sucer la bite");
                    console.log(JSON.stringify(data));
                },
                error: function (jqXHR, textStatus, err) {
                    alert("bug");
                }
            })