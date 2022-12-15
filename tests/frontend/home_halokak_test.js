Feature('frontend_google');

Scenario('Melihat halaman google', ({ I }) => {
    I.amOnPage("https://www.google.com");
    I.wait(5);
    I.see('Gmail');
    I.seeElement('//*[@id="gb"]/div/div[1]/div/div[1]/a');
    I.see('Gambar');
    I.seeElement('//*[@id="gb"]/div/div[1]/div/div[2]/a');
    //I.seeElement('/html/body/div[1]/div[2]/div/img');
    //I.seeElement('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div');
    //I.see('Penelusuran Google');
    //I.seeAttributesOnElements('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[4]/center/input[1]', {class: 'gNO89b'});
    //I.see('Saya Lagi Beruntung');
    //I.seeAttributesOnElements('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[4]/center/input[2]', {class: 'RNmpXc'});
    I.see('Tonton sekarang:');
    I.see('Lihat');
    I.see('tren Penelusuran tahun 2022');
    //I.seeAttributesOnElements('/html/body/div[1]/div[4]/div[1]/div/a', {href: 'https://www.google.com/url?q=https://www.youtube.com/watch%3Fv%3D4WXs3sKu41I/%3Futm_source%3Dgoogle%26utm_medium%3Dhpp%26utm_campaign%3DIndonesia_yis22&source=hpp&id=19032865&ct=3&usg=AOvVaw0GIzvwMZjPykFRfw5Sl1Ji&sa=X&ved=0ahUKEwjNkuSLlPv7AhXIU2wGHTaqB3UQ8IcBCBI', class: 'NKcBbd'});
    I.see('Google tersedia dalam bahasa:');
    I.see('English');
    I.seeElement('//*[@id="SIvCob"]/a[1]');
    I.seeElement('//*[@id="SIvCob"]/a[2]');
    I.see('Basa Bali');
    I.seeElement('//*[@id="SIvCob"]/a[3]');
    //footer
    I.see('Indonesia');
    I.see('Tentang');
    //I.seeAttributesOnElements('/html/body/div[1]/div[5]/div[2]/div[1]/a[1]', {href: 'https://about.google/?utm_source=google-ID&utm_medium=referral&utm_campaign=hp-footer&fg=1', class: 'pHiOh'});
    I.see('Periklanan');
    //I.seeAttributesOnElements('/html/body/div[1]/div[5]/div[2]/div[1]/a[2]', {href: 'https://www.google.com/intl/id_id/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1', class: 'pHiOh'});
    I.see('Bisnis');
    //I.seeAttributesOnElements('/html/body/div[1]/div[5]/div[2]/div[1]/a[3]', {href: 'https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1'});
    I.see('Cara kerja Penelusuran');
    //I.seeAttributesOnElements('/html/body/div[1]/div[5]/div[2]/div[1]/a[4]', {href: 'https://google.com/search/howsearchworks/?fg=1', class: 'pHiOh'});


});