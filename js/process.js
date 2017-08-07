function showAlert()
{
    var title = document.getElementById("title").value;
    var rating = document.getElementById("rating").value;
    var genre = document.getElementById("genre").value;
    var year = document.getElementById("year").value;
    var link = document.getElementById("link").value;

    alert(
        "Title: "+title+
        "\nRating: "+rating+
        "\nYear: "+year+
        "\nGenre: "+genre+
        "\nLink: "+link
    );
}