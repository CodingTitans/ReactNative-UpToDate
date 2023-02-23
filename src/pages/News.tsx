import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const News = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View>
          <View>
            <View>
              <Image
                source={{
                  uri: 'https://media.npr.org/assets/img/2022/12/12/2012-037864-lg-041b10ab25936420ced3632b1ff6e8229fd5e851-s1600-c85.webp',
                }}
                style={styles.image}
              />
            </View>
          </View>

          <View>
            <View>
              <Text style={styles.resourceLine}>
                On Dec 12, 2022 | By NewsRoom
              </Text>
            </View>
          </View>

          <View>
            <View>
              <Text style={styles.headingLine}>
                Fusion breakthrough could be climate, energy game-changer
              </Text>
            </View>
          </View>

          <View>
            <View>
              <Text style={styles.paragraphLine}>
                Scientists have reached a major milestone in the pursuit of
                nuclear fusion, the process that powers the stars and could one
                day provide a globally accessible, long-term supply of
                carbon-free energy. U.S. government officials said the
                breakthrough was achieved last week at the National Ignition
                Facility at Lawrence Livermore National Laboratory, the site of
                a long-running effort to achieve fusion by blasting specially
                designed targets with powerful laser beams. During a test on
                Dec. 5, the nuclear reaction triggered in a tiny target released
                about 50 per cent more energy than it took to trigger the
                reaction with a powerful blast from the laser. But experts
                caution that Tuesday’s exciting news should be tempered with the
                reality of how far scientists have yet to go to turn fusion into
                a useful energy source. The result marks the first time any such
                experiment has achieved a net energy gain – a critical threshold
                that is the primary goal of fusion research.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  headingLine: {
    fontSize: 29,
    textAlign: 'left',
    fontWeight: 'bold',
    padding: 10,
  },
  resourceLine: {
    fontSize: 15,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    padding: 10,
  },
  paragraphLine: {
    fontSize: 16,
    textAlign: 'left',
    alignSelf: 'flex-start',
    padding: 10,
  },
  image: {
    height: 250,
    width: '100%',
  },
});

News.displayName = 'News';

export default News;
