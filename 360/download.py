import requests

#toplam sayıyı belirledim
imageCount = 36

#for döngüsünde her bi foto için indirme kodu yazdım
for i in range(1, imageCount+1):
    ##2 farklı yerde ismi kullanacağım için isim değişkeni oluşturdum
    name = 'A_'+str(i).zfill(3)+'.png' #str stringe dönüştürüyor inti, zpad ise 3 karaktere tamamlıyor 1 -> 001
    #ismi dahil ederek url oluşturdum
    url = 'https://www.canon.com.tr/for_home/product_finder/cameras/digital_slr/eos_7d_mark_ii/assets/images/360/'+name
    #bu urldeki veriyi r değişkenine atadım
    r = requests.get(url, allow_redirects=True)

    #python ile write koşulu ile bir dosya oluşturdum name isminde ve içine gelen verinin contentini bastım
    open(name, 'wb').write(r.content)
    #tüm bu kodlar 36 foto için çalıştı ve 36 farklı dosya getirilip oluşturuldu