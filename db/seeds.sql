DROP TABLE IF EXISTS kanye_types CASCADE;

DROP TABLE IF EXISTS kanye_instances CASCADE;

CREATE TABLE kanye_types (
id SERIAL PRIMARY KEY,
kanye_type TEXT NOT NULL,
img_url TEXT
);

CREATE TABLE kanye_instances (
id SERIAL PRIMARY KEY,
context TEXT NOT NULL,
img_url TEXT,
kanye_type_id INT REFERENCES kanye_types(id)
);

-- create kanye_types
INSERT INTO kanye_types (kanye_type, img_url)
VALUES
('Old Kanye', 'http://liliagjerstad.com/wp-content/uploads/tumblr_mhxc0oQhdw1ruqbd4o1_500.jpg'),
('Straight from the Go Kanye', 'https://www.bet.com/shows/bet-presents-love-happiness-an-obama-celebration/2016/more/from-common-s-house-to-the-white-house/_jcr_content/bodycopycontainer/listiclecontainer/listicleitem_3/embedded_image/image.custom1200x970.dimg/__1477588511040__1477588481496/102716-shows-bet-presents-love-happiness-an-obama-celebration-2016-more-from-common-s-house-to-the-white-house-Kanye.jpg'),
('So Kanye', 'https://www.billboard.com/files/styles/article_main_image/public/media/kanye-west-taylor-swift-2009-vmas-billboard-650.jpg'),
('New Kanye', 'https://akns-images.eonline.com/eol_images/Entire_Site/2017111/rs_600x600-170211120220-600.kanye-west.cm.21117.jpg');

-- create kanye_instances
INSERT INTO kanye_instances (context, img_url, kanye_type_id)
VALUES
('Kanye West dating Alexis Phifer', 'https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr03/23/12/original-25836-1400863423-29.jpg', 1),
('Kanye West frontpage Complex Mag', 'https://i.pinimg.com/originals/8a/51/88/8a5188088d0fe14c5bc7b1405c013ddc.jpg', 1),
('Kanye West receives an honorary doctorate', 'http://assets.nydailynews.com/polopoly_fs/1.2218437.1431384704!/img/httpImage/image.jpg_gen/derivatives/article_750/west12f-5-web.jpg', 2),
('Kanye West open mic in Chicago', 'http://okp-cdn.okayplayer.com/wp-content/uploads/2015/05/kanye-west-vic-mensa-surprise-performance-open-mike-chicago-video-main.jpg', 2),
('Kanye West paparazzi/airport incident', 'http://officiallyurban.com/wp-content/uploads/2013/07/video-kanye-west-flips-on-paparazzi.jpg', 3),
('Kanye West at the VMAs', 'http://assets.nydailynews.com/polopoly_fs/1.2111891.1496927060!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/kanye-west-chugs-bottle-hennessey-2009-mtv-vma.jpg', 3),
('Kanye West with the West Family', 'https://www.closermag.fr/var/closermag/storage/images/article/la-photo-wtf-de-kim-kardashian-sans-soutien-gorge-avec-ses-enfants-715013/5656692-2-fre-FR/La-photo-WTF-de-Kim-Kardashian-sans-soutien-gorge-avec-ses-enfants.jpg', 4),
('Kanye West chubs', 'http://www.djcarisma.com/wp-content/uploads/2017/09/Kanye.jpg', 4);
