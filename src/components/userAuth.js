import requests

def get_song_details(song_name, artist_name, genius_api_key):
    base_url = "https://api.genius.com/search"
    headers = {"Authorization": "Bearer " + genius_api_key}
    params = {"q": song_name + " " + artist_name}

    response = requests.get(base_url, headers=headers, params=params)
    
    if response.status_code == 200:
        data = response.json()
    else:
        print("Failed to fetch data from Genius API")

song_name = "Song Title"
artist_name = "Artist Name"
genius_api_key = "0qKoG__sdg5xX691W2OGk0jDZKvj8kJVS-rPdkMYsizHmlUqC3Cq2jLtbSUrllF2"

get_song_details(song_name, artist_name, genius_api_key)
