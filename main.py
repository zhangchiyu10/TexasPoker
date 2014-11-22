import web,random
urls = (
    '/player/(.*)', 'GetCard',
    '/table','Table',
    '/shuffle','Shuffle'
)
app = web.application(urls, globals())
cards=[i for i in range(3,55)]

render = web.template.render('./')

def pickCard(id):
	return str(cards[id])+".jpg"

class GetCard:        
    def GET(self,id):
    	if type(id) is str:
    		return "Enter your seat number."
    	else:
    		id=int(id)
    		if id >23 or id<=0:
    			return "Check your seat number."
    		else:
    			return render.player(pickCard(2*id-1+4),pickCard(2*id+4),id)

class Table:        
    def GET(self):
        return render.table() 

class Shuffle:
	def GET(self):
		random.shuffle(cards)
		return cards[0:5]

if __name__ == "__main__":
    app.run()
