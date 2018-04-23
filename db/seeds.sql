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
('Old Kanye', 'https://i.pinimg.com/originals/8a/51/53/8a5153d179a09c5591170546a0cf4793.jpg'),
('Straight from-the-Go Kanye', 'http://pixel.nymag.com/imgs/daily/entertainment/upload/2010/11/kanye/22_condokanyecovers_2_face.nocrop.w557.h670.jpg'),
('So Kanye', 'http://pixel.nymag.com/imgs/daily/entertainment/upload/2010/11/kanye/22_condokanyecovers_4_power.nocrop.w559.h670.jpg'),
('New Kanye', 'http://ksassets.timeincuk.net/wp/uploads/sites/55/2016/02/Ca9XF0EWEAApIbG-920x920.jpg');

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
